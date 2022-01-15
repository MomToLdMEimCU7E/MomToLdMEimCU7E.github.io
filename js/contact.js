var msgBtn = document.querySelector("#msgBtn");
var msgInput = document.querySelector("#msgInput");
var clearAllBtn = document.querySelector("#clearAllBtn");
var msgUl = document.querySelector("ul");
        msgBtn.onclick = function () {
            var str = msgInput.value.trim(); 
            if ( str != "" && str != null) {
                var msgObj = {
                    value : escape(str),
                    date : new Date().getTime()
                }
                window.localStorage.setItem("msg_" + msgObj.date,JSON.stringify(msgObj));
                msgUl.appendChild(createLi(msgObj));
                msgInput.value = "";
            }
        }
        function createLi(msgObj) {
            var msgLi = document.createElement("li");
            msgLi.setAttribute("key","msg_" + msgObj.date);
            var msgSpan = document.createElement("span");
            msgSpan.innerHTML = unescape(msgObj.value);
            var dateSpan = document.createElement("span");
            dateSpan.innerHTML = new Date(msgObj.date).toLocaleString();
            msgLi.appendChild(msgSpan);
            msgLi.appendChild(dateSpan);
            return msgLi;
        }