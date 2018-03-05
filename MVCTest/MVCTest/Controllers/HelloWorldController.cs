using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCTest.Controllers
{
    public class HelloWorldController : Controller
    {
        // GET: HelloWorld
        public ActionResult Index()
        {
            return View();
        }

        public string Index2()
        {
            return "This is my <b>default</b> action...";
        }

        public string Welcome(string name, int numTimes = 1)
        {
            return HttpUtility.HtmlEncode("Hello " + name + ", NumTimes is: " + numTimes);
        }

        public string Welcome2(string name, int ID = 1)
        {
            return HttpUtility.HtmlEncode("Hello " + name + ", ID: " + ID);
        }


        public string CropImage()
        {
            string imagePath = @"C:\Users\kazarboys\Source\Repos\How-to-use-tesseract-ocr-4.0-with-csharp\tesseract-master.1153\samples\IMG.jpg";
            Bitmap croppedImage;

            // Here we capture the resource - image file.
            using (var originalImage = new Bitmap(imagePath))
            {
                //Set Position {x1,y1,width,height}
                Rectangle crop = new Rectangle(212, 154, 152, 32);

                //width: 128; height: 24; X1: 200; Y1: 120; X2: 328; Y2: 144
                //212 154 X2: Y2: 152 32

                // Here we capture another resource.
                croppedImage = originalImage.Clone(crop, originalImage.PixelFormat);

            } // Here we release the original resource - bitmap in memory and file on disk.

            // At this point the file on disk already free - you can record to the same path.
            croppedImage.Save(@"C:\Users\kazarboys\Source\Repos\How-to-use-tesseract-ocr-4.0-with-csharp\tesseract-master.1153\samples\crop.jpg", ImageFormat.Jpeg);

            // It is desirable release this resource too.
            croppedImage.Dispose();

            return "Done";
        }


        }
}