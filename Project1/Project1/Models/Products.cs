using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GYFChallenge.Models
{
    public class Products
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }
        public string name { get; set; }
        public int price { get; set; }
        public DateTime date { get; set; }
        public string category { get; set; }
        public string description { get; set; }
    }
}
