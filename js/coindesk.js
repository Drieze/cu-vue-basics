var coindeskapp = new Vue({
    el: "#coindesk",
    data: {
        info: null,
        loading: true,
        hasError: false
    },
    created:
        function () {
            axios
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(response => (this.info = response.data.bpi))
                .catch(error => {
                    console.log(error)
                    this.hasError = true
                  })
                  .finally(() => this.loading = false)
        },
});
