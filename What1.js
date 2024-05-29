var m_ = function(SN,Start,Over) {
    let Se = '';
    for ( let i = Start,j; i <= Over;i++ ) {
        if ( i <= 9 ) {
            j = '0000'
        } else if ( i <= 99 ) {
            j = '000'
        } else if ( i <= 999 ) {
            j = '00'
        } else if ( i <= 9999 ) {
            j = '0'
        } else {
            j =''
        };
        Se += SN + '-' + j + i + ' \n'
    };
    console.log(Se)
}
