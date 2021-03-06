export const appPattern = {
    score: /^((100)|([0-9]{1,2}[\.][0-9]{1,2})|([A-D])(?:-|\+)|([A-F])|([0-9]{1,2}))$/,
    dropDownNumericValue: /^[1-9]\d*$/,
    title: /^[a-zA-Z0-9](.*[a-zA-Z0-9])?$/,
    dropDownNumericValueWithMinus: /^[1-9\-]\d*$/,
    dropDownNumericValueWith0: /^[0-9]\d*$/,
    dropDownNumericValueWithMinusAnd0: /^[0-9\-]\d*$/,
    //phoneno: /^([+][1-9]{1,3}[\s\-][1-9]{3}[\s\-]{0,1}[0-9]{3}[\s\-]{0,1}[0-9]{4,11})$/,
    phoneno: /(^\+\d[0-9\s\-()]{1,48}$)|(^\d{8,15}$)/,
    fileexplorename: /^[0-9a-zA-Z ... ]+$/,
    newPhoneno: /^(?=.*[0-9])[+()0-9]+$/,
    PhoneWithPlusAtStart: /^\+*\d(?=.*[0-9])[()0-9]+$/,
    newPhoneRegrex: /^[\+\d]?(?:[\d-.\s()]*)$/,
    //custom : /^[\+\d]?(?:[\d-.\s()]*)[\)\d]$/,
    customphone: /(^\+\d[0-9\s-()]{1,48}$)|(^\d{8,15}$)/,
    //mobileno: /^([+][1-9]{1,3}[\s\-][1-9]{3}[\s\-]{0,1}[0-9]{3}[\s\-]{0,1}[0-9]{4,11})$/,
    mobileno: /(^\+\d[0-9\s\-()]{1,48}$)|(^\d{8,15}$)/,
    email: /^(?=[^@]*[A-Za-z])[^\W|_/\s][\w\-\.]+@([\w\-]+\.)+[\w\-]{2,20}$/,
    //phoneNoHintTooltip: "+11 111-111-1111XXXXXXX, +11 111 111 1111XXXXXXX, +11 1111111111XXXXXXX",
    phoneNoHintTooltip: "",
    //phoneNoHintLabel: "with country code e.g.",
    phoneNoHintLabel: "",
    //mobileNoHintTooltip: "+11 111-111-1111XXXXXXX, +11 111 111 1111XXXXXXX, +11 1111111111XXXXXXX",
    mobileNoHintTooltip: "",
    //mobileNoHintLabel: "with country code e.g.",
    mobileNoHintLabel: "",
    smtpPort: /^\d{0,4}$/,
    UserName: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$|^(?=[^@]*[A-Za-z])[^\W|_/\s][\w\-\.]+@([\w\-]+\.)+[\w\-]{2,20}$/,
    // InstPort:/^[0-9]*$/,
    // ipv4:/\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b)/,
    // ipv6:/(^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$)/,
    // hostname:/^(?:[a-z0-9]+(?:-[a-z0-9]+)*\.){1,2}[a-z]{2,12}$/,
    //newHost:(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))
    //smtpServer:/\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b|^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$|^(?:[a-z0-9]+(?:-[a-z0-9]+)*\.){1,2}[a-z]{2,12}$/,
    smtpServer: /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$|^[a-zA-z0-9][a-zA-z0-9-]+\.(.[a-zA-Z]{1,})+/,
    ifcsPattern: /^[A-Za-z]{4}[0]{1}[0-9A-Za-z]{6}/,
    swiftCodePattern: /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?/,
    pincode: null,///^[a-zA-Z0-9][a-zA-Z0-9\- ]{0,10}[a-zA-Z0-9]$/,
    pincodeMaxLength: 11,
    alphaNumericWithSpace: /^[a-z][0-9]|^[a-z][a-z0-9\s]+$/i,
    alphaNumericWithSpecialCharacters: /^[^\W|_/\s][ \w\d\W|_/]*$/i,
    alphaNumericWithoutSpecialCharacters: /^[a-zA-Z]+\.[a-zA-Z]{4,10}^/,
    custom: /^(?=.*[^\W|_/\s])[ \w\d\W|_/]*$/i,
    nameWithoutSpecialCharWithSpace: /^(?!\d+$)(?:[a-zA-Z0-9][a-zA-Z0-9 ]*)?$/,
    //new aplhanumeric -alternative one 
    alphaNumericWithSpecialReg: /^(?=.*[a-zA-Z])(?=.*[0-9a-z])[A-Za-z0-9\s]+$/,
    //Sep-2001 pattern
    monthWithYear: /^[A-Za-z]{3}\-(?!0+$)\d{4}$/,
    //numberic ||  N/A 
    numbericOrNA: /^(?:(?!0+$)[0-9]{1,2}|NA|n\/a)$/i,
    // alphanumeric with rang 
    alphaNumericWithSpaceWithRang: /^(?!\s)[a-z]([a-zA-Z0-9\s]{2,100})(?!\s)$/i,
    // /^[a-z0-9](?!.*?[^\na-z-@&$]{2}).*?[a-z0-9]+$/i,
    campusName: /^[^\d|\W|_/\s][a-zA-Z-\s0-9@]*$/i,
    alphaNumericWithSpaceNew: /^[^\d|\W|_/\s][a-zA-Z0-9-\s]*$/i,
    agentCode: /^[a-z0-9][a-z0-9\s]+$/i,
    studentID: /^[a-z0-9][a-z0-9-/\\s]+$/i,
    fax: '^(\+?\d{1,}(\s?|\-?)\d*(\s?|\-?)\(?\d{2,}\)?(\s?|\-?)\d{3,}\s?\d{3,})$',
    url: /^(ftp|http|https):\/\/[^ "]+$/,
    panNo: /^[A-Z]{5}[0-9]{4}[A-Z]{1}/,
    onlyNumbers: /^[0-9]{1,9}$/,
    skypeId: /^[^\W|_/\s][\w\d\S|_/]*$/i,
    personName: /^[^\d][a-z0-9]+$/i,
    personFullName: /^[^\d|\W|_/\s][a-zA-Z0-9-\s]*$/i,
    numberwithDecimals: /^-?[\d]{0,10}((\.)[\d]{1,2})?$/,
    companyName: /^[A-Za-z0-9]([a-zA-Z0-9]|[- @\.#&!])*$/
}
