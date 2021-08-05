using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


#nullable disable

namespace LicensePortal_APPAPI.Models
{
    public partial class Organization
    {
        
        [Key]
        public int OrgId { get; set; }
        public string OrgName { get; set; }
        public string OrgEmailAdd { get; set; }
        public string OrgConNumber { get; set; }
        public string OrgAddress { get; set; }
        public int PostCode { get; set; }
        public string OrgType { get; set; }
        public string OrgNumber { get; set; }
        public string OrgContactName { get; set; }

        
    }
}
