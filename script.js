var newItem = document.getElementsByTagName("input");
var items = document.getElementsByClassName("item");
var total = document.getElementsByClassName("total");
var done = document.getElementsByClassName("done");
var completed = document.getElementsByClassName("completed");
var notCompleted = document.getElementsByClassName("not-completed");
var add = document.getElementsByClassName("add");

newItem[0].addEventListener("keypress", inputEventListener, Event);
add[0].addEventListener("click", inputEventListener, Event);

function inputEventListener(event) {
    if (event.keyCode === 13 || event.keyCode == null) {
        if (newItem[0].value != '') {
            var main = document.getElementsByClassName("list")[0].innerHTML;
            main += '<div class="item not-completed">';
            main += '<div class="complete"><i class="far fa-circle"></i>&nbsp;' + newItem[0].value + '</div>';
            main += '<div class="delete"><i class="fas fa-times-circle"></i></div>';
            main += '</div>';
            document.getElementsByClassName("list")[0].innerHTML = main;
            newItem[0].value = "";
            items = document.getElementsByClassName("item");
            completed = document.getElementsByClassName("completed");
            total[0].innerHTML = items.length - completed.length + " Tasks Left";
            done[0].innerHTML = completed.length + " Tasks Completed";
            notCompleted = document.getElementsByClassName("not-completed");
            complete();
        }

    }
}
complete();
function complete() {
    for (var i = 0; i < items.length; i++) {
        var z = this;
        items[i].addEventListener("click", function () {
            this.parentNode.removeChild(this);
            completed = document.getElementsByClassName("completed");
            total[0].innerHTML = items.length - completed.length + " Tasks Left";
            done[0].innerHTML = completed.length + " Tasks Completed";
        })
        items[i].getElementsByClassName("complete")[0].addEventListener("click", function () {
            event.stopPropagation();

            if (this.getElementsByTagName("i")[0].className !== "far fa-check-circle") {
                this.parentNode.className = "item completed";
                this.getElementsByTagName("i")[0].className = "far fa-check-circle";
                this.style.color = "Green";
            }
            else {
                this.parentNode.className = "item not-completed";
                this.getElementsByTagName("i")[0].className = "far fa-circle";
                this.style.textDecoration = "none";
            }
            completed = document.getElementsByClassName("completed");
            total[0].innerHTML = items.length - completed.length + " Tasks Left";
            done[0].innerHTML = completed.length + " Tasks Completed";
        });
    }
}