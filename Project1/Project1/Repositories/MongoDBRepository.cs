using MongoDB.Driver;

namespace GYFChallenge.Repositories
{
    public class MongoDBRepository
    {
        MongoClient client;
        public IMongoDatabase db;

        public MongoDBRepository()
        {
            client = new MongoClient($"mongodb+srv://{Environment.GetEnvironmentVariable("USER")}:{Environment.GetEnvironmentVariable("PASSWORD")}@cluster0.y8ocjww.mongodb.net/?retryWrites=true&w=majority");

            db = client.GetDatabase("GYFChallenge");
        }
    }
}
