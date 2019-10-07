const chalk = require('chalk');
const punctuations = ['.', ',', ':', '!', '?', ';']

/*
    ======== Notes for developers ========
    Working Status  : working correctly
    Testing Status  : Tested Passed

    Problems : 
        1] if there is no punctuation at the end of teh sentence it is returning
        empty construct object => (resolved : rushikesh)
*/
function sentencesConstruction(words) {
    let count = 0;
    let construction = []
    let first_word_index = 0,
        last_word_index = 0,
        flag = false;
    words.forEach((word, index) => {
        if (count == 0) {
            first_word_index = index;
        }
        count++;
        let flag = false;
        punctuations.forEach((punctuation, ind) => {
            if (word.word.endsWith(punctuation)) {
                flag = true;
                last_word_index = index;
                count = 0;
                let no_of_words = last_word_index - first_word_index + 1;
                construction = [...construction,
                    ...[{
                        "first_word_index": first_word_index,
                        "last_word_index": last_word_index,
                        "no_of_words": no_of_words
                    }]
                ]
            }
        });
        //means last word with no punctuation
        if (!flag && index == words.length - 1) {
            construction = [...construction,
                ...[{
                    "first_word_index": first_word_index,
                    "last_word_index": words.length - 1,
                    "no_of_words": words.length - first_word_index
                }]
            ]
        }
    });
    return construction;
}

/*
    ======== Notes for developers ========
    Working Status  : working correctly
    Testing Status  : Tested Passed

    Prblems :
        1] first if statement handling less than 3 words is directly adding those 
        to next sentence no matter what is size of that sentence => (resolved : rushikesh)

*/
function finalizeSentencesConstruction(construction) {
    // console.log("Not Finalised Construction : ", construction);
    for (let i = 0; i < construction.length - 1; i++) {
        //extreamly less content
        //try to pad with next sentence
        //if next sentence is small
        if (construction[i].no_of_words < 3) {
            construction[i].last_word_index = construction[i + 1].last_word_index;
            construction[i].no_of_words += construction[i + 1].no_of_words;
            construction.splice(i + 1, 1);
            i = i - 1; //for checking if newly created sentence is correct or not
        } else if (construction[i].no_of_words < 6) {
            if (construction[i].no_of_words + construction[i + 1].no_of_words <= 12) {
                construction[i].last_word_index = construction[i + 1].last_word_index;
                construction[i].no_of_words += construction[i + 1].no_of_words;
                construction.splice(i + 1, 1);
            }
        } else if (construction[i].no_of_words > 12) {
            let smaller_sentences = [];
            let no_of_new_sentences = construction[i].no_of_words / 12;
            for (let j = 0; j < no_of_new_sentences; j++) {
                smaller_sentences = [...smaller_sentences,
                    ...[{
                        "first_word_index": construction[i].first_word_index + 12 * j,
                        "last_word_index": j < no_of_new_sentences - 1 ? construction[i].first_word_index + 12 * (j + 1) - 1 : construction[i].last_word_index,
                        "no_of_words": j < no_of_new_sentences - 1 ? 12 : construction[i].no_of_words - j * 12
                    }]
                ]
            }
            construction.splice(i, 1);
            smaller_sentences.forEach((obj, ind) => {
                construction.splice(i + ind, 0, obj);
            });
        }
    }
    let i = construction.length - 1;
    console.log("i final : ", i);
    if (construction[i].no_of_words > 12) {
        let smaller_sentences = [];
        let no_of_new_sentences = construction[i].no_of_words / 12;
        for (let j = 0; j < no_of_new_sentences; j++) {
            smaller_sentences = [...smaller_sentences,
                ...[{
                    "first_word_index": construction[i].first_word_index + 12 * j,
                    "last_word_index": j < no_of_new_sentences - 1 ? construction[i].first_word_index + 12 * (j + 1) : construction[i].last_word_index,
                    "no_of_words": j < no_of_new_sentences - 1 ? 12 : construction[i].no_of_words - j * 12
                }]
            ]
        }
        construction.splice(i, 1);
        smaller_sentences.forEach((obj, ind) => {
            construction.splice(i + ind, 0, obj);
        });
    }
    return construction;
}

/*
    ======== Notes for developers ========
    Working Status  : working correctly
    Testing Status  : Tested Passed

*/
function getTimeDataFromSubtitlesPunctuated(words) {
    let construction = finalizeSentencesConstruction(sentencesConstruction(words));
    let subtitles = {};
    let start, start_ceil, end, end_ceil;
    construction.forEach((construct, index) => {
        start =
            words[construct.first_word_index].startTime.seconds +
            words[construct.first_word_index].startTime.nanos / 1000000000;
        start_ceil = Math.ceil(words[construct.first_word_index].startTime.seconds +
            words[construct.first_word_index].startTime.nanos / 1000000000);
        let sentence = ''
        for (let word_index = construct.first_word_index; word_index <= construct.last_word_index; word_index++) {
            sentence += ' ' + words[word_index].word;
        }
        end =
            words[construct.last_word_index].endTime.seconds +
            words[construct.last_word_index].endTime.nanos / 1000000000;
        end_ceil =
            Math.ceil(words[construct.last_word_index].endTime.seconds +
                words[construct.last_word_index].endTime.nanos / 1000000000);
        let obj = {}
        obj.sentenceStartTime = start;
        obj.sentenceEndTime = end;
        obj.sentence = sentence;
        subtitles = {...subtitles,
            ... {
                [start_ceil]: obj
            }
        };

    });
    return subtitles;
}

module.exports = {
    getTimeDataFromSubtitlesPunctuated: getTimeDataFromSubtitlesPunctuated
}