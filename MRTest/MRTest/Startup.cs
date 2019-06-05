using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MRTest.Startup))]
namespace MRTest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
