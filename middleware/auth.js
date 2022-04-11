export default async function ({ $axios, store}) {
    await $axios.get('/api/validate', {
        headers: { 'Authorization': sessionStorage.getItem('token') }
    }).then (response => {
        if (response.data.success) {
            console.log(response.data.message);
            sessionStorage.setItem('isLoggedIn', true);
            store.dispatch('setUser', response.data.user);
        } else {
            console.log(response.data.message); 
            sessionStorage.setItem('isLoggedIn', false);
            sessionStorage.removeItem('token');
        }
    }
    ).catch(error => {
        console.log(error);
        sessionStorage.removeItem('token');
        sessionStorage.setItem('isLoggedIn', false);
    });
}