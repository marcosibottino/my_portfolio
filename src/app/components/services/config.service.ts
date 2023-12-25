class configService {

    async getData(data: any) {
        const response = await fetch(data);
        const res = response.json;
        return res;
    }

    async fetchData(endpoint:any) {
        try {
          const url = endpoint.startsWith('http') ? endpoint : `./${endpoint}`;
          const response = await fetch(url);
    
          if (!response.ok) {
            throw new Error(`Error al realizar la solicitud: ${response.statusText}`);
          }
    
          const data = await response.json();
          return data; // Solo retornamos los datos, no la respuesta completa
        } catch (error) {
          console.error('error', error);
        }
      }
}

export default new configService();