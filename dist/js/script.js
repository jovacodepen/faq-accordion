const openBtns = document.querySelectorAll(".accordion-arrow");
const accordionItem = document.querySelectorAll(".accordion-list-item");

for (btn of openBtns) {
    btn.addEventListener("click", function expand(){
        let question = this.parentNode.parentNode;
        let btnID = question.id;

        accordionItem.forEach((ques) => {
            if(ques.id !== btnID) {
                ques.classList.remove("openAnimation");
            } else {
                ques.classList.toggle("openAnimation");
            }
        })

    })
}
