﻿using FordonsbesiktningBackend.Models.DTOs;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;

namespace FordonsbesiktningBackend.Services
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

        public List<SubsystemDTO>? getSubsystems(string Id)
        {
            if (Int32.TryParse(Id, out int id))
            {
                var SystemCollection = _database.GetCollection<SystemDTO>("Protokoll").AsQueryable();
                return SystemCollection.Where(x => x.Id == Id).First().Subsystems.ToList();
            }

            return null;
        }

    }
}
