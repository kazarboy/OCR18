using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MVCTest
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "HelloWorld", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
           name: "Hello",
           url: "{controller}/{action}/{name}/{id}"
            );

            routes.MapRoute(
           name: "Hello2",
           url: "{controller}/{action}/{x1}/{y1}/{x2}/{y2}"
           );
        }
    }
}
