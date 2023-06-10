using Blocklabs.Model;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Text;
using Website.Controllers;

namespace Blocklabs.Controllers
{
    [Route("")]
    public class HomeController : BaseController
    {

        private readonly ConfigurationModel _configurationModel;

        public HomeController(ConfigurationModel configurationModel)
        {
            _configurationModel = configurationModel;
        }


        [Route("")]
        public IActionResult Index()
        {
            CloudPage().SetDescription("Increasing productivity in the workplace, while drastically cutting down costs");

            return View();
        }
        [Route("contact")]
        public IActionResult Contact()
        {
            CloudPage("Conatct us").SetDescription("Contact Bloklabs for inquiries, feedback, or support. Get in touch with our team to learn more. We are here to assist you and address any questions or concerns you may have.");

            return View();
        }
        [HttpPost]
        [Route("sendMail")]
        public IActionResult SendMail([FromBody] MailModel user)
        {

            string name = user.Name;
            string comapnyName = user.ComanyName;
            string email = user.Mail;
            string phone = user.Phone;
            string subject = user.Subject;

            string receiver = _configurationModel.Receiver;
            string smtpEmail = _configurationModel.Email;
            string smtpPassword = _configurationModel.Password;

            try
            {
                SmtpClient client = new("smtp.office365.com", 587)
                {
                    EnableSsl = false,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Credentials = new System.Net.NetworkCredential(smtpEmail, smtpPassword),
                    Timeout = 20000
                };

                client.EnableSsl = true; // Enable SSL/TLS encryption after STARTTLS

                MailMessage send = new()
                {
                    From = new MailAddress(smtpEmail, "Request"),
                    Subject = "Request",
                    IsBodyHtml = true,

                };

                StringBuilder builder = new();
                builder.AppendLine($"<b>Name:</b> <br/> {name}");
                builder.AppendLine("<br />");
                builder.AppendLine("<br />");
                builder.AppendLine($"<b>Comany Name:</b> <br/> {comapnyName}");
                builder.AppendLine("<br />");
                builder.AppendLine("<br />");
                builder.AppendLine($"<b>Email:</b> <br /> {email}");
                builder.AppendLine("<br />");
                builder.AppendLine("<br />");
                builder.AppendLine($"<b>Phone:</b> <br /> {phone}");
                builder.AppendLine("<br />");
                builder.AppendLine("<br />");
                builder.AppendLine($"<b>Subject:</b> <br /> {subject.Replace("\n", "<br/>")} ");
                builder.AppendLine("<br />");

                send.To.Add(receiver);
                send.Body = builder.ToString();
                client.Send(send);

                return Content("Done");
            }
            catch (Exception ex)
            {
                return Content(ex.Message);

            }
        }
    }
}