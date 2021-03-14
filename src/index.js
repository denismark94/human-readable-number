module.exports = function toReadable (number) {
    var x = number.toString().split("")
    nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    ten = ['ten', 'eleven', 'twe', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine']
    result = ''
    switch (x.length) {
        case 1: return(nums[number]);
        case 2: {
            switch (x[0]) {
                case '0': return '';
                case '1': {
                    switch (x[1]) {
                        case '0': return ten[0];
                        case '1': return ten[1];
                        case '2': return ten[2] + 'lve';
                        case '4': return nums[4] + 'teen';
                        default: return (ten[parseInt(x[1])] + 'teen');
                    }
                }
                case '2': return (ten[2] + 'nty' + ((x[1] != '0')?(" " + nums[parseInt(x[1])]):""));
                default: return (ten[parseInt(x[0])] + 'ty' + ((x[1] != '0')?(" " + nums[parseInt(x[1])]):""));
            }
        }
        case 3: {

            return nums[parseInt(x[0])] + ' hundred' + ((x[1] == 0 && x[2] == 0)?'':(' ' + toReadable(parseInt(x[1]+x[2]))))
        }   
    }
}
