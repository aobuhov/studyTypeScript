function strip(x: string|number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim();
}

class MyResp {
    header = 'response header';
    result = 'response result';
}

class MyError {
    header = 'error header';
    message = 'error message';
}

function handle(val: MyResp | MyError) {
    if (val instanceof MyResp) {
        return {
            info: val.header + val.result
        }
    }
    if (val instanceof MyError) {
        return {
            info: val.header + val.message
        }
    }
}

//------------
type AlertType  = 'success' | 'danger' | 'warning';
function setAlertType(type: AlertType) {
}
setAlertType('success')
setAlertType('warning')
//  setAlertType('default') --it's error as 'default' is not in type AlertType

