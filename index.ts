import axios from "axios";


interface IResponse {
  message: string;
  subtitle: string;
}

/**
 * FOAAS API wrapper for JS
 * @author Geoxor, Cimok
 */
export default class FOAAS {
  /**
   * Creates REST requests to FOAAS
   * @author Geoxor
   */
  private async request(endpoint: string) {
    try {
      const response = await axios.get(`https://www.foaas.com/${endpoint}`);
      const {message, subtitle} = response.data;
      return `${message} ${subtitle}`;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  public getVersion    = async (): Promise<IResponse> => await this.request('version');
  public getOperations = async (): Promise<IResponse> => await this.request('operations');

  public asshole     = async (from: string): Promise<IResponse> => await this.request(`asshole/${from}`);
  public awesome     = async (from: string): Promise<IResponse> => await this.request(`awesome/${from}`);
  public bag         = async (from: string): Promise<IResponse> => await this.request(`bag/${from}`);
  public because     = async (from: string): Promise<IResponse> => await this.request(`because/${from}`);
  public bucket      = async (from: string): Promise<IResponse> => await this.request(`bucket/${from}`);
  public bye         = async (from: string): Promise<IResponse> => await this.request(`bye/${from}`);
  public cool        = async (from: string): Promise<IResponse> => await this.request(`cool/${from}`);
  public cup         = async (from: string): Promise<IResponse> => await this.request(`cup/${from}`);
  public dense       = async (from: string): Promise<IResponse> => await this.request(`dense/${from}`);
  public diabetes    = async (from: string): Promise<IResponse> => await this.request(`diabetes/${from}`);
  public dumbledore  = async (from: string): Promise<IResponse> => await this.request(`dumbledore/${from}`);
  public even        = async (from: string): Promise<IResponse> => await this.request(`even/${from}`);
  public everyone    = async (from: string): Promise<IResponse> => await this.request(`everyone/${from}`);
  public everything  = async (from: string): Promise<IResponse> => await this.request(`everything/${from}`);
  public family      = async (from: string): Promise<IResponse> => await this.request(`family/${from}`);
  public fascinating = async (from: string): Promise<IResponse> => await this.request(`fascinating/${from}`);
  public flying      = async (from: string): Promise<IResponse> => await this.request(`flying/${from}`);
  public ftfy        = async (from: string): Promise<IResponse> => await this.request(`ftfy/${from}`);
  public fyyff       = async (from: string): Promise<IResponse> => await this.request(`fyyff/${from}`);
  public give        = async (from: string): Promise<IResponse> => await this.request(`give/${from}`);
  public holygrail   = async (from: string): Promise<IResponse> => await this.request(`holygrail/${from}`);
  public horse       = async (from: string): Promise<IResponse> => await this.request(`horse/${from}`);
  public idea        = async (from: string): Promise<IResponse> => await this.request(`idea/${from}`);
  public immensity   = async (from: string): Promise<IResponse> => await this.request(`immensity/${from}`);
  public jinglebells = async (from: string): Promise<IResponse> => await this.request(`jinglebells/${from}`);
  public life        = async (from: string): Promise<IResponse> => await this.request(`life/${from}`);
  public logs        = async (from: string): Promise<IResponse> => await this.request(`logs/${from}`);
  public lowpoly     = async (from: string): Promise<IResponse> => await this.request(`lowpoly/${from}`);
  public maybe       = async (from: string): Promise<IResponse> => await this.request(`maybe/${from}`);
  public looking     = async (from: string): Promise<IResponse> => await this.request(`looking/${from}`);
  public me          = async (from: string): Promise<IResponse> => await this.request(`me/${from}`);
  public mornin      = async (from: string): Promise<IResponse> => await this.request(`mornin/${from}`);
  public no          = async (from: string): Promise<IResponse> => await this.request(`no/${from}`);
  public pink        = async (from: string): Promise<IResponse> => await this.request(`pink/${from}`);
  public programmer  = async (from: string): Promise<IResponse> => await this.request(`programmer/${from}`);
  public question    = async (from: string): Promise<IResponse> => await this.request(`question/${from}`);
  public ratsarse    = async (from: string): Promise<IResponse> => await this.request(`ratsarse/${from}`);
  public retard      = async (from: string): Promise<IResponse> => await this.request(`retard/${from}`);
  public ridiculous  = async (from: string): Promise<IResponse> => await this.request(`ridiculous/${from}`);
  public rtfm        = async (from: string): Promise<IResponse> => await this.request(`rtfm/${from}`);
  public sake        = async (from: string): Promise<IResponse> => await this.request(`sake/${from}`);
  public shit        = async (from: string): Promise<IResponse> => await this.request(`shit/${from}`);
  public single      = async (from: string): Promise<IResponse> => await this.request(`single/${from}`);
  public thanks      = async (from: string): Promise<IResponse> => await this.request(`thanks/${from}`);
  public that        = async (from: string): Promise<IResponse> => await this.request(`that/${from}`);
  public this        = async (from: string): Promise<IResponse> => await this.request(`this/${from}`);
  public too         = async (from: string): Promise<IResponse> => await this.request(`too/${from}`);
  public tucker      = async (from: string): Promise<IResponse> => await this.request(`tucker/${from}`);
  public what        = async (from: string): Promise<IResponse> => await this.request(`what/${from}`);
  public yeah        = async (from: string): Promise<IResponse> => await this.request(`yeah/${from}`);
  public zayn        = async (from: string): Promise<IResponse> => await this.request(`zayn/${from}`);
  public zero        = async (from: string): Promise<IResponse> => await this.request(`zero/${from}`);

  public blackadder  = async (name: string, from: string): Promise<IResponse> => await this.request(`blackadder/${name}/${from}`);
  public bravo       = async (name: string, from: string): Promise<IResponse> => await this.request(`bm/${name}/${from}`);
  public bus         = async (name: string, from: string): Promise<IResponse> => await this.request(`bus/${name}/${from}`);
  public chainsaw    = async (name: string, from: string): Promise<IResponse> => await this.request(`chainsaw/${name}/${from}`);
  public cocksplat   = async (name: string, from: string): Promise<IResponse> => await this.request(`cocksplat/${name}/${from}`);
  public dalton      = async (name: string, from: string): Promise<IResponse> => await this.request(`dalton/${name}/${from}`);
  public deraadt     = async (name: string, from: string): Promise<IResponse> => await this.request(`deraadt/${name}/${from}`);
  public donut       = async (name: string, from: string): Promise<IResponse> => await this.request(`donut/${name}/${from}`);
  public equity      = async (name: string, from: string): Promise<IResponse> => await this.request(`equity/${name}/${from}`);
  public fewer       = async (name: string, from: string): Promise<IResponse> => await this.request(`fewer/${name}/${from}`);
  public fts         = async (name: string, from: string): Promise<IResponse> => await this.request(`fts/${name}/${from}`);
  public gfy         = async (name: string, from: string): Promise<IResponse> => await this.request(`gfy/${name}/${from}`);
  public ing         = async (name: string, from: string): Promise<IResponse> => await this.request(`ing/${name}/${from}`);
  public keep        = async (name: string, from: string): Promise<IResponse> => await this.request(`keep/${name}/${from}`);
  public king        = async (name: string, from: string): Promise<IResponse> => await this.request(`king/${name}/${from}`);
  public legend      = async (name: string, from: string): Promise<IResponse> => await this.request(`legend/${name}/${from}`);
  public linus       = async (name: string, from: string): Promise<IResponse> => await this.request(`linus/${name}/${from}`);
  public look        = async (name: string, from: string): Promise<IResponse> => await this.request(`look/${name}/${from}`);
  public madison     = async (name: string, from: string): Promise<IResponse> => await this.request(`madison/${name}/${from}`);
  public nugget      = async (name: string, from: string): Promise<IResponse> => await this.request(`nugget/${name}/${from}`);
  public off         = async (name: string, from: string): Promise<IResponse> => await this.request(`off/${name}/${from}`);
  public outside     = async (name: string, from: string): Promise<IResponse> => await this.request(`outside/${name}/${from}`);
  public problem     = async (name: string, from: string): Promise<IResponse> => await this.request(`problem/${name}/${from}`);
  public rockstar    = async (name: string, from: string): Promise<IResponse> => await this.request(`rockstar/${name}/${from}`);
  public shakespeare = async (name: string, from: string): Promise<IResponse> => await this.request(`shakespeare/${name}/${from}`);
  public shutup      = async (name: string, from: string): Promise<IResponse> => await this.request(`shutup/${name}/${from}`);
  public think       = async (name: string, from: string): Promise<IResponse> => await this.request(`think/${name}/${from}`);
  public thinking    = async (name: string, from: string): Promise<IResponse> => await this.request(`thinking/${name}/${from}`);
  public thumbs      = async (name: string, from: string): Promise<IResponse> => await this.request(`thumbs/${name}/${from}`);
  public understand  = async (name: string, from: string): Promise<IResponse> => await this.request(`understand/${name}/${from}`);
  public version     = async (name: string, from: string): Promise<IResponse> => await this.request(`version/${name}/${from}`);
  public waste       = async (name: string, from: string): Promise<IResponse> => await this.request(`waste/${name}/${from}`);
  public xmas        = async (name: string, from: string): Promise<IResponse> => await this.request(`xmas/${name}/${from}`);
  public yoda        = async (name: string, from: string): Promise<IResponse> => await this.request(`yoda/${name}/${from}`);
  public you         = async (name: string, from: string): Promise<IResponse> => await this.request(`you/${name}/${from}`);

  public back        = async (name:     string, from: string):                    Promise<IResponse> => await this.request(`name/${name}/${from}`);
  public birthday    = async (name:     string, from: string):  /** we were */    Promise<IResponse> => await this.request(`ballimer/${name}/${from}`);
  public caniuse     = async (tool:     string, from: string):  /** high asf */   Promise<IResponse> => await this.request(`caniuse/${tool}/${from}`);
  public greed       = async (noun:     string, from: string):  /** when we */    Promise<IResponse> => await this.request(`greed/${noun}/${from}`);
  public particular  = async (thing:    string, from: string):  /** did all */    Promise<IResponse> => await this.request(`particular/${thing}/${from}`);
  public anyway      = async (company:  string, from: string):  /** this shit */  Promise<IResponse> => await this.request(`anyway/${company}/${from}`);
  public absolutely  = async (company:  string, from: string):                    Promise<IResponse> => await this.request(`absolutely/${company}/${from}`);
  public keepcalm    = async (reaction: string, from: string):  /**    uwu    */  Promise<IResponse> => await this.request(`keepcalm/${reaction}/${from}`);
  public pulp        = async (language: string, from: string):                    Promise<IResponse> => await this.request(`pulp/${language}/${from}`);
  public dosomething = async (verb:     string, noun: string, from: string):      Promise<IResponse> => await this.request(`dosomething/${verb}/${noun}/${from}`);
  public ballimer    = async (name:     string, company:string, from:string):     Promise<IResponse> => await this.request(`ballimer/${name}/${company}/${from}`);
  public field       = async (name:     string, from: string, reference: string): Promise<IResponse> => await this.request(`field/${name}/${from}/${reference}`);
}