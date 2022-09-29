using GYFChallenge.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace GYFChallenge.Repositories
{
    public class ProductCollection : IProductCollection
    {
        internal MongoDBRepository _repository = new();
        private IMongoCollection<Products> Collection;

        public ProductCollection()
        {
            Collection = _repository.db.GetCollection<Products>("Products");
        }

        public async Task DeleteProduct(string id)
        {
            var filter = Builders<Products>.Filter.Eq(p => p.id, id);
            await Collection.DeleteOneAsync(filter);
        }

        public async Task<List<Products>> GetAllProducts()
        {
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }

        public async Task<Products> GetProductById(string id)
        {
            return await Collection.FindAsync(new BsonDocument { { "_id", new ObjectId(id) } }).Result.FirstAsync();
        }

        public async Task InsertProduct(Products product)
        {
            await Collection.InsertOneAsync(product);
        }

        public async Task UpdateProduct(Products product)
        {
            var filter = Builders<Products>.Filter.Eq(p => p.id, product.id);
            await Collection.ReplaceOneAsync(filter, product);
        }
    }
}
