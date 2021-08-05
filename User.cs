using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace LicensePortal_APPAPI.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string EmailAddress { get; set; }
        public int ContactNumber { get; set; }
        public string Address { get; set; }
        public DateTime lastlogin { get; set; }
        public string password { get; set; }
    }
}
