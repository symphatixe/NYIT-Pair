import { User } from '../../../server/backend'
const mysql2 = require('mysql2/promise')

/*            const [active] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);

            if (active.length < 0) {
                const {user_ID, name, password, email, student_ID, year, major, campus, bio} = active[0];
                const user = new User(user_ID, name, password, email, student_ID, year, major, campus, bio);

                try{
                    const [hashtags] = await connection.query('SELECT (hashtag) FROM hashtags WHERE user_ID = ?', [user.userID]);
                    const index = 0;
                    hashtags.forEach(item => user.addHashtag(item.hashtag));
                }
    
                catch(error) {
                    console.log('some error', error);
                }
    
                res.status(200).json(user);
            }

            else {res.status(400).json({ message: 'Error with creating user, contact admins for support.'})};
            */