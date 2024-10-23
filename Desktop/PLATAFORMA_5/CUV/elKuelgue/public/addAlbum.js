
    document.getElementById('albumForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            const response = await axios.post('http://localhost:3000/albums', data);
            alert(response.data);
            form.reset()
        } catch (error) {
            console.error('Error al crear el álbum:', error);
            alert('Error al crear el álbum');
        }
    });
