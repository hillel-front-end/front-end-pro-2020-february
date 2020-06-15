export default  {
    async sandPostAjax(url, payload) {
        const response = await fetch(url,  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        return data;
    }
}