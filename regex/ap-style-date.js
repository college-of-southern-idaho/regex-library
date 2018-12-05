let pattern = new RegExp (['^(TBA)$|^(((Jan\\.|Feb\\.|March|April|May|June|July|Aug\\.|Sept\\.|Oct\\.|Nov\\.|Dec\\.)',
                             '\\s([1-9]|[12][0-9])(\\-([1-9]|[12][0-9]))?|(Jan\\.|March|April|May|June|July|Aug\\.|Sept\\.|Oct\\.|Nov\\.|Dec\\.)',
                             '\\s([1-9]|[12][0-9]|30)(\\-([1-9]|[12][0-9]|30))?|((Jan\\.|March|May|July|Aug\\.|Oct\\.|Dec\\.)',
                             '\\s([1-9]|[12][0-9]|3[01])(\\-([1-9]|[12][0-9]|3[01]))?)),\\s(2\\d{3})',
                             '(\\s\\-\\s((Jan\\.|Feb\\.|March|April|May|June|July|Aug\\.|Sept\\.|Oct\\.|Nov\\.|Dec\\.)',
                             '\\s([1-9]|[12][0-8])(\\-([1-9]|[12][0-8]))?|(Jan\\.|March|April|May|June|July|Aug\\.|Sept\\.|Oct\\.|Nov\\.|Dec\\.)',
                             '\\s([1-9]|[12][0-9]|30)(\\-([1-9]|[12][0-9]|30))?|((Jan\\.|March|May|July|Aug\\.|Oct\\.|Dec\\.)',
                             '\\s([1-9]|[12][0-9]|3[01])(\\-([1-9]|[12][0-9]|3[01]))?)),\\s(2\\d{3}))?)$'].join(''), 'g');

let testString = 'Jan. 1, 2019';

let result = pattern.test(testString);

console.log(result);