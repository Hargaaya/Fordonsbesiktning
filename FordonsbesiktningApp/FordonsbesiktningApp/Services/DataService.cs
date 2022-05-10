using FordonsbesiktningApp.Models.DTOs;
using MongoDB.Driver;
using MongoDB.Bson;

namespace FordonsbesiktningApp.Services
{
    public class DataService : IDataService
    {
        private IMongoDatabase _database;

        public DataService(IConfiguration config)
        {

            var connStr = config.GetConnectionString("MongoDb");
            var settings = MongoClientSettings.FromConnectionString(connStr);
            settings.ServerApi = new ServerApi(ServerApiVersion.V1);

            var Client = new MongoClient(settings);
            var database = Client.GetDatabase("FordonsbesiktningDb");
            _database = database;
        }

        public SchemaDTO getSchema()
        {
            var schema = _database.GetCollection<BsonDocument>("Systems");
            Console.WriteLine(schema.Find(new BsonDocument()).FirstOrDefault().ToString());
            throw new NotImplementedException();
        }

        public List<SubsystemDTO> getSubsystem(string Id)
        {
            throw new NotImplementedException();
        }

        public List<SystemDTO> getSystems(string Id)
        {
            throw new NotImplementedException();
        }
    }
}
