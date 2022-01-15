var msgInput = document.querySelector("#msgInput");
        var msgBtn = document.querySelector("#msgBtn");
        var clearAllBtn = document.querySelector("#clearAllBtn");
        var msgUl = document.querySelector("ul");
        msgBtn.onclick = function () {
            var str = msgInput.value.trim(); 
            if ( str != "" && str != null) {
                var msgObj = {
                    value : escape(str),
                    date : new Date().getTime()
                }
                console.log(msgObj);
                console.log(JSON.stringify(msgObj));
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
            var delBtn = document.createElement("input");
            delBtn.type = "button";
            delBtn.value ="X";
            msgLi.appendChild(msgSpan);
            msgLi.appendChild(dateSpan);
            msgLi.appendChild(delBtn);
            return msgLi;
            
        }
        msgUl.onclick = function (e) {
            if (e.target.nodeName == "INPUT") {
                window.localStorage.removeItem(e.target.parentNode.getAttribute("key"));
                this.removeChild(e.target.parentNode);
            }
        }
        clearAllBtn.onclick = function () {
            var liArr = document.querySelectorAll("li");
            for (var key in window.localStorage) {
                for (var i = 0; i < liArr.length; i++) {
                    if (liArr[i].getAttribute("key") == key) {
                        window.localStorage.removeItem(key);
                    }
                }
            }
            msgUl.innerHTML = "";
            
        }
        function showMsgInfos() {
            var keyRegExp = /^(msg_)/;
            for (var key in window.localStorage) {
                if (keyRegExp.test(key)) {
                    msgUl.appendChild(createLi(JSON.parse(window.localStorage.getItem(key))));
                }
            }
        }
        showMsgInfos();