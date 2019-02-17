using System.Threading.Tasks;
using ZwajApp.API.Models;

namespace ZwajApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register (User user ,string passward);
         Task<User> Login (string username ,string passward);
         Task<bool> UserExists (string username);
    }
}