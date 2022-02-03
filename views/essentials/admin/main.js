(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform))) {
        console.log("Mobile Device? : "+navigator.userAgent)
        Swal.fire({
            title: "Mobile Device?",
            text: "RenCode (Web) Does not yet support mobile devices.",
            icon: "warning"
        }).then(resp => {
            console.log("Okay | SWAL | MOBILE");
            window.location.href = "https://www.google.com/";
        })
    }
})();