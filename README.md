
ssh root@101.43.116.91
cd /ROOT/ChatGPT-Next-Web/.next

rm -rf standalone
 unzip standalone.zip

 nvm use v16.15.1

 ./start.sh



BASE_URL=http://13.228.240.187:8080/platform OPENAI_API_KEY=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 PORT=3000 node  ./standalone/server.js

 BASE_URL=http://13.228.240.187:8080/platform OPENAI_API_KEY=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 PORT=3000 node  ./standalone/server.js > log.out &

export BASE_URL=http://13.228.240.187:8080/platform
export OPENAI_API_KEY=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
export PORT=3000

 pm2 start ./standalone/server.js

pm2 restart all --update-env