 
 
 
 async function API_Post_request(urls, data, content_type='application/json') {

  try {
    const config = {
      method: 'post',
      url: urls,
      data: data,
      headers: {}
    };

    if (content_type === 'multipart/form-data') {
    } else {
      config.headers['Content-Type'] = content_type || 'application/json';
    }

    const res = await axios(config);
    return true;
  } catch (e) {
    console.error('API_Post_request error:', e.response?.data || e.message);
    return false;
  }
}


export default API_Post_request;

