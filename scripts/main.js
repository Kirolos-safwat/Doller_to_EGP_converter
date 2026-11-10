function dollToEGb() {
  event.preventDefault();
  inputValue = document.querySelector("#input").value;
  result = document.querySelector("#result");
  result.innerHTML = (inputValue * 50) + "£" ;
  result.classList.add(
    "mt-5",
    "w-[90%]",
    "md:w-[75%]",
    "rounded-full",
    "bg-gray-50",
    "result",
    "text-center",
    "text-lg",
    "sm:text-lg",
    "border-1",
    "text-black-300",
    "md:text-xl",
    "lg:text-2xl",
    "bold",
    "text-base/6",
    "p-2",
  );
}
