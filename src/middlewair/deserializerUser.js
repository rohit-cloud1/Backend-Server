import lodash from 'lodash';
import jwt from 'jsonwebtoken';

const { get } = lodash;

const deserializerUser = async (req, res, next) => {
  try {
    const authHeader = get(req, 'headers.authorization', '');

    if (authHeader) {
      const token = authHeader.replace(/^Bearer\s+/i, '');
      
      // Note: Use jwt.verify() if you need to validate the token
      const user = jwt.decode(token); 
      
      if (user) {
        req.user = user;
      }
    }

    next(); // Always call next, even if no user found
  } catch (error) {
    console.error('Error in deserializerUser:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default deserializerUser;
