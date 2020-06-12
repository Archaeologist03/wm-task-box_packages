import axios from 'axios';

const boxPackagesUrl = 'http://www.mocky.io/v2/5ed511c53300005f00f7a790';

export default axios.create({
  baseURL: boxPackagesUrl,
});
