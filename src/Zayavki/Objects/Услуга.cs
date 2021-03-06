//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Zayavki
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Услуга.
    /// </summary>
    // *** Start programmer edit section *** (Услуга CustomAttributes)

    // *** End programmer edit section *** (Услуга CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УслугаE", new string[] {
            "Название as \'Название\'",
            "Стоимость as \'Стоимость\'"})]
    public class Услуга : ICSSoft.STORMNET.DataObject
    {
        
        private string fНазвание;
        
        private double fСтоимость;
        
        private IIS.Zayavki.Заявка fЗаявка;
        
        // *** Start programmer edit section *** (Услуга CustomMembers)

        // *** End programmer edit section *** (Услуга CustomMembers)

        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.Название CustomAttributes)

        // *** End programmer edit section *** (Услуга.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.Название Get start)

                // *** End programmer edit section *** (Услуга.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (Услуга.Название Get end)

                // *** End programmer edit section *** (Услуга.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.Название Set start)

                // *** End programmer edit section *** (Услуга.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (Услуга.Название Set end)

                // *** End programmer edit section *** (Услуга.Название Set end)
            }
        }
        
        /// <summary>
        /// Стоимость.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.Стоимость CustomAttributes)

        // *** End programmer edit section *** (Услуга.Стоимость CustomAttributes)
        public virtual double Стоимость
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.Стоимость Get start)

                // *** End programmer edit section *** (Услуга.Стоимость Get start)
                double result = this.fСтоимость;
                // *** Start programmer edit section *** (Услуга.Стоимость Get end)

                // *** End programmer edit section *** (Услуга.Стоимость Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.Стоимость Set start)

                // *** End programmer edit section *** (Услуга.Стоимость Set start)
                this.fСтоимость = value;
                // *** Start programmer edit section *** (Услуга.Стоимость Set end)

                // *** End programmer edit section *** (Услуга.Стоимость Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Zayavki.Заявка.
        /// </summary>
        // *** Start programmer edit section *** (Услуга.Заявка CustomAttributes)

        // *** End programmer edit section *** (Услуга.Заявка CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.Zayavki.Заявка Заявка
        {
            get
            {
                // *** Start programmer edit section *** (Услуга.Заявка Get start)

                // *** End programmer edit section *** (Услуга.Заявка Get start)
                IIS.Zayavki.Заявка result = this.fЗаявка;
                // *** Start programmer edit section *** (Услуга.Заявка Get end)

                // *** End programmer edit section *** (Услуга.Заявка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуга.Заявка Set start)

                // *** End programmer edit section *** (Услуга.Заявка Set start)
                this.fЗаявка = value;
                // *** Start programmer edit section *** (Услуга.Заявка Set end)

                // *** End programmer edit section *** (Услуга.Заявка Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УслугаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугаE", typeof(IIS.Zayavki.Услуга));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Услуга.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfУслуга CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfУслуга CustomAttributes)
    public class DetailArrayOfУслуга : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Zayavki.DetailArrayOfУслуга members)

        // *** End programmer edit section *** (IIS.Zayavki.DetailArrayOfУслуга members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Услуга by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Услуга.
        /// </summary>
        public DetailArrayOfУслуга(IIS.Zayavki.Заявка fЗаявка) : 
                base(typeof(Услуга), ((ICSSoft.STORMNET.DataObject)(fЗаявка)))
        {
        }
        
        public IIS.Zayavki.Услуга this[int index]
        {
            get
            {
                return ((IIS.Zayavki.Услуга)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Zayavki.Услуга dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
