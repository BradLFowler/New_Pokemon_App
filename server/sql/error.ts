const handlemySQLError = (res: any, err: any) => {
    console.log('SQL Error: ', err)
    return res.status(500).send('An unexpected error occurred');
  }
  
  export default handlemySQLError