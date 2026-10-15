using API.DTOs;
using API.Entities;
using API.Interfaces;

// 44
namespace API.Extensions
{
    public static class AppUserExtensions
    {
        public static UserDto ToDto(this AppUser user, ITokenService tokenService)
        {
            var token = tokenService.CreateToken(user);
            return new UserDto
            {
                Id = user.Id.ToString(),
                Email = user.Email,
                DisplayName = user.DisplayName,
                Token = token
            };
        }
    }
}