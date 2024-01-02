var container = document.createElement("div");
container.className = "container";
document.body.append(container);

setTimeout(() => {
    container.innerHTML = "10"
    setTimeout(() => {
        container.innerHTML = "9"
        setTimeout(() => {
            container.innerHTML = "8"
            setTimeout(() => {
                container.innerHTML = "7"
                setTimeout(() => {
                    container.innerHTML = "6"
                    setTimeout(() => {
                        container.innerHTML = "5"
                        setTimeout(() => {
                            container.innerHTML = "4"
                            setTimeout(() => {
                                container.innerHTML = "3"
                                setTimeout(() => {
                                    container.innerHTML = "2"
                                    setTimeout(() => {
                                        container.innerHTML = "1"
                                        setTimeout(() => {
                                            container.innerHTML = "Happy Independence Day"
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
