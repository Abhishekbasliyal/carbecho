const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const USER = require("../models/usersmodel"); 

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await USER.findOne({ googleId: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = await USER.create({
          googleId: profile.id,
          first_name: profile.name.givenName,
          last_name: profile.name.familyName,
          email: profile.emails[0].value,
        });

        return done(null, newUser);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id); // MongoDB _id
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await USER.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
