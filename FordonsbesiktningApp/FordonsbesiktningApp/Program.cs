using FordonsbesiktningApp.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IDataService, DataService>();

var app = builder.Build();

app.UseRouting();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseDeveloperExceptionPage();
}

app.MapControllers();

app.Run();
