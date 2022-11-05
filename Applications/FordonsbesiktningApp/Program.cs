using FordonsbesiktningApp.Services;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(opt => opt.AddPolicy(name: "DevCorsPolicy", policy =>
 {
     policy.WithOrigins("http://localhost:3000");

 }));

builder.Services.AddScoped<IDataService, DataService>();


var app = builder.Build();

app.UseRouting();
app.UseCors("DevCorsPolicy");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();

    app.UseDeveloperExceptionPage();
}

app.MapControllers();

app.Run();
