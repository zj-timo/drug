export default {
    write: function(val, oldVal) {
        return val.replace(/(^\s*)|(\s*$)/g,'')
    }
}
