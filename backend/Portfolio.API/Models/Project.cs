namespace Portfolio.API.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Titulo { get; set; } = string.Empty;
        public string Descricao { get; set; } = string.Empty;
        public string Link { get; set; } = string.Empty;
    }
}