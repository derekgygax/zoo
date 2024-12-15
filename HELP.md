# vva
VVA (Voters Voice Ammendment) webpage

## Code Stack
- Next.js 14.1.0+
- Sass 1.70.0+
- Postgres
- Prisma 5.9.0+
- Vercel host
- Github https://github.com/votersvoiceamendment/vva.git

## Database
- Database: vva

```
  Log on to postgres on the command line
    psql postgres
  List databases
    \l
  Choose database 'vva'
    \c vva
  List tables
    \dt
  List columns in table 'vva_user'
    \d vva_user
```

```
Creating dumps of the database - RUN ON COMMAND LINE!!!
https://nesin.io/blog/backup-restore-vercel-postgres-database
  Dump so that it can be fully restored as is - use custom format - the below is for vercel
    pg_dump15 -d 'postgres://default:bCv1YS7wUVDI@ep-flat-dream-a4s34qql.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require' -Fc -f "vva_{DATE}.dmp"

  I DON"T KNOW HOW THIS WORKS YET!!!
  Restore the database from a custom formatted dump - for VERCEL. this should work but you would need to double check
  Also you need to completely clean up the vercel database before doing this
    PGPASSWORD="bCv1YS7wUVDI" pg_restore --no-owner --role=default -h ep-flat-dream-a4s34qql-pooler.us-east-1.aws.neon.tech -U default -d verceldb -p 5432 vva_{DATE}.dmp

```

```
TO CREATE THE DB LOCALLY AND CHECK IT
  -createdb -h localhost -p 5432 -U your_username new_database_name
  -pg_restore -h localhost -p 5432 -U your_username -d new_database_name --verbose /path/to/your/dumpfile.dump
```

## Using Prisma as your ORM

```
  npx prisma init // First creates the prisma things you need to attach to database
  npx prisma db pull // pull an already made database back into a schema in prisma
  npx prisma studio // shows the database in a webpage so you can pick it apart
  npx prisma generate  // MUST DO EVERY TIME YOU CHANGE THE DB

  To update the database with Prisma
  --update the schema manually
  npx prisma format  // Formats the schema or something
  IF IN DEV
  npx prisma migrate dev --name {MIGRATION NAME YOU CHOOSE}    // to push schema to DEV
  Review it --chat gpt said we should
  IF IN PRODUCTION
  npx prisma migrate dev --create-only
  npx prisma migrate deploy

  UPDATE THE CLIENT!
  npx prisma generate
  
  push the schema to the DB
  npx prisma db push



  To initialize and use Prisma if you already have the schema but no interactions
  npx prisma generate
  -create a lib folder
  -make a prisma.ts file
    -Look at the prisma.ts file here as a guide


    doing db stuff on vercel
  psql "postgres://default:bCv1YS7wUVDI@ep-flat-dream-a4s34qql.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require" < db_scripts/[SCRIPT_NAME]

```

## Google recaptcha
```
  Go to this site to register:
    -https://www.google.com/u/4/recaptcha/admin/site/708173092
   -Give Label and Project name
   -Register and get
    -site key - this will be in a client place so it needs NEXT_PUBLIC_
    -secret key
  -bun add react-google-recaptcha-v3
  -In a client components have 
    import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
    -This has to be at least one level above where you then use
      const [recaptchaToken, setReCaptachToken] = useState<string>("");
      and you send back the recaptcha token in the form
        <input type="hidden" name="recaptcha" value={recaptchaToken} />
  Then the server action needs
    const recaptcha = formData.get("recaptcha");
    const googleReCaptchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`;
    const googleReCaptchaResponse = await fetch(googleReCaptchaVerificationUrl, {
      method: 'POST',
    });
    const googleReCaptchaData = await googleReCaptchaResponse.json();
      googleReCaptchaData.success === true
      && googleReCaptchaData.score > 0.5
    Must pass those things in order to be an accepted captcha
```

## Email Services using GoDaddy
```
  Fix these issues:
    -Send emails programatically on lib/sendEmail.ts
    -Forward emails on GoDaddy to other domains.
      contact@vva.us -> votersvoiceamendment@gmail.com

  Domain: vva.us
  Email: support@vva.us (or could change it but it MUST be in vva.us ... the web domain doesn't matter, just you need to call and do this every time your domain for emails is different)

  To get this to work you need to CALL
    (480) 463-8835
  and get them to set up the DMARC for the domain
  you can NOT do this on your own. you MUST call!

  THEN
    https://security.microsoft.com/
    email and collaboration
      policy & rules
        threat policies
          DKIM tab
            makes a DKIM record that he will set up manually for you - THIS IS WAYYY HARDER THAN THE AWS SES WAY lol. Namecheap I will probably have to do the same

  Then you can use nodemailer and everything and it should work just fine
  look at the lib/sendEmail.ts file

```

## Caching with Next.js
```
// TODO Next.js Caching!!!
// https://www.youtube.com/watch?v=VBlSe8tvg4U


// TODO Very important for caching and server actions!!!
// TODO also Security, Authentication, Authorization, and Closures and Encryption!!!
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

// MORE RECENT on Next.js 15 caching
// https://www.youtube.com/watch?v=3RyguimNe8s

```

## Connect vercel and get .env

```
vercel logout
vercel login
  continue with github --- YOU MUST BE SIGNED IN TO THE GITHUB FOR votersvoiceamendment ON YOUR BROWSER!
vercel link
  do yes, yes, yes to link
vercel env pull .env.local
  Add this stuff to the .env file
  
```

## Prerequisites
- bun 1.0.25+

## Install and use bun 1.0.25

```
curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.25"

-Follow the commands the terminal prints out
```

## Install Dependencies

```
bun install
```

## Run Dev Server

```
bun run dev
```

## Build Project

```
bun run build
```

## Start built project

```
bun start
```

## Getting Started

```
bun dev
```

## Build a secret variable using the terminal
```
openssl rand -hex 32
```
