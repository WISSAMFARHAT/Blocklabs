var exports = {};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var submit = document.querySelector("#submit");
var fullname = document.querySelector("input[name='name']");
var email = document.querySelector("input[name='email']");
var phone = document.querySelector("input[name='phone']");
var company = document.querySelector("input[name='comapny']");
var subject = document.querySelector("textarea[name='message']");
var form = document.querySelector(".contact");
var message = document.querySelector(".error");
submit.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var data, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fullname.classList.remove("_invalid");
                email.classList.remove("_invalid");
                phone.classList.remove("_invalid");
                subject.classList.remove("_invalid");
                if (fullname.value === "" || email.value === "" || phone.value === "" || subject.value === "") {
                    if (fullname.value === "")
                        fullname.classList.add("_invalid");
                    if (email.value === "")
                        email.classList.add("_invalid");
                    if (phone.value === "")
                        phone.classList.add("_invalid");
                    if (subject.value === "")
                        subject.classList.add("_invalid");
                    message.innerHTML = "Please fill in all required fields.";
                    return [2 /*return*/];
                }
                if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
                    email.classList.add("_invalid");
                    message.innerHTML = "Please enter a valid email address.";
                    return [2 /*return*/];
                }
                return [4 /*yield*/, fetch("/sendMail", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            Name: fullname.value,
                            Mail: email.value,
                            Subject: subject.value,
                            Phone: phone.value,
                            ComanyName: company.value
                        })
                    })];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.text()];
            case 2:
                result = _a.sent();
                if (result === "Done")
                    form.classList.add("_done");
                else
                    message.innerHTML = "Error : " + result;
                return [2 /*return*/];
        }
    });
}); });


//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsS0FBSzs0QkFDbEIsVUFBVSxFQUFFLE9BQU8sQ0FBQyxLQUFLO3lCQUM1QixDQUFDO3FCQUNMLENBQUMsRUFBQTs7Z0JBWkksSUFBSSxHQUFHLFNBWVg7Z0JBRVcscUJBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOztnQkFBMUIsTUFBTSxHQUFHLFNBQWlCO2dCQUU5QixJQUFJLE1BQU0sS0FBSyxNQUFNO29CQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7b0JBRTVCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQzs7OztLQUcvQyxDQUFDLENBQUMiLCJmaWxlIjoiY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBmdWxsbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSduYW1lJ11cIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nZW1haWwnXVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5jb25zdCBwaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwaG9uZSddXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGNvbXBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0nY29tYXBueSddXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IHN1YmplY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFbbmFtZT0nbWVzc2FnZSddXCIpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIikgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpIGFzIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbnN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGZ1bGxuYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJfaW52YWxpZFwiKTtcclxuICAgIGVtYWlsLmNsYXNzTGlzdC5yZW1vdmUoXCJfaW52YWxpZFwiKTtcclxuICAgIHBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJfaW52YWxpZFwiKTtcclxuICAgIHN1YmplY3QuY2xhc3NMaXN0LnJlbW92ZShcIl9pbnZhbGlkXCIpO1xyXG5cclxuICAgIGlmIChmdWxsbmFtZS52YWx1ZSA9PT0gXCJcIiB8fCBlbWFpbC52YWx1ZSA9PT0gXCJcIiB8fCBwaG9uZS52YWx1ZSA9PT0gXCJcIiB8fCBzdWJqZWN0LnZhbHVlID09PSBcIlwiKSB7XHJcblxyXG4gICAgICAgIGlmIChmdWxsbmFtZS52YWx1ZSA9PT0gXCJcIilcclxuICAgICAgICAgICAgZnVsbG5hbWUuY2xhc3NMaXN0LmFkZChcIl9pbnZhbGlkXCIpO1xyXG5cclxuICAgICAgICBpZiAoZW1haWwudmFsdWUgPT09IFwiXCIpXHJcbiAgICAgICAgICAgIGVtYWlsLmNsYXNzTGlzdC5hZGQoXCJfaW52YWxpZFwiKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChwaG9uZS52YWx1ZSA9PT0gXCJcIilcclxuICAgICAgICAgICAgcGhvbmUuY2xhc3NMaXN0LmFkZChcIl9pbnZhbGlkXCIpO1xyXG5cclxuICAgICAgICBpZiAoc3ViamVjdC52YWx1ZSA9PT0gXCJcIikgXHJcbiAgICAgICAgICAgIHN1YmplY3QuY2xhc3NMaXN0LmFkZChcIl9pbnZhbGlkXCIpO1xyXG5cclxuICAgICAgICBtZXNzYWdlLmlubmVySFRNTCA9IFwiUGxlYXNlIGZpbGwgaW4gYWxsIHJlcXVpcmVkIGZpZWxkcy5cIjtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIS9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdChlbWFpbC52YWx1ZSkpIHtcclxuICAgICAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwiX2ludmFsaWRcIik7XHJcblxyXG4gICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXCIvc2VuZE1haWxcIiwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgTmFtZTogZnVsbG5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIE1haWw6IGVtYWlsLnZhbHVlLFxyXG4gICAgICAgICAgICBTdWJqZWN0OiBzdWJqZWN0LnZhbHVlLFxyXG4gICAgICAgICAgICBQaG9uZTogcGhvbmUudmFsdWUsXHJcbiAgICAgICAgICAgIENvbWFueU5hbWU6IGNvbXBhbnkudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IGF3YWl0IGRhdGEudGV4dCgpO1xyXG5cclxuICAgIGlmIChyZXN1bHQgPT09IFwiRG9uZVwiKVxyXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcIl9kb25lXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gXCJFcnJvciA6IFwiICsgcmVzdWx0O1xyXG5cclxuXHJcbn0pOyJdfQ==
