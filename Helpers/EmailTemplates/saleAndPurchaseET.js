export const emailTemplate = (
  lowPrice,
  leftPostcode,
  rightPostcode,
  transactionType,
  sellingPrice,
  purchasePrice,
  buyPropertyType,
  salePropertyType,
  name,
  company
) => {
  var html = `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Conveyancing Quote</title>
  </head>
  
  <body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;color:#252525;">
  
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
    <tr>
      <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse; width:600px;">
          <tr>
            <td>
              <table align="center" border="0" cellpadding="15" cellspacing="0" width="600" style="border-collapse:collapse">
                <tr>
                  <td align="center"><a href="#"><img style="display:block;" border="0" width="125" height="60" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f7181ccc137bd3514d67653_logo.png" alt="logo" /></a></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table align="center" border="0" cellpadding="2" cellspacing="0" width="600" style="border-collapse:collapse">
                <tr>
                  <td align="center" style="background-color:#CFD1EF;"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table align="center" border="0" cellpadding="2" cellspacing="0" width="600" style="border-collapse:collapse">
                <tr>
                  <td align="center" style="background-color:#ffffff;"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse">
                <tr>
                  <td align="center">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="480" style="border-collapse:collapse">
                      <tr>
                        <td align="center" style="background-color:#CFD1EF;padding:10px;"></td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:54px; margin:0px auto;font-weight:600;color:#252525;">Instruct a solicitor</td>
                      </tr>
                      <tr>
                        <td align="center" style="font-size:48px;line-height:60px;font-weight:600;color:#252525;">from <b style="font-size: 68px; color: #ED008C;">£${lowPrice.toFixed(
                          2
                        )}</b><img style="display:inline-block;" width="42" height="48" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f7181cc0d482e0fdb2c7323_hero_arrow.png" alt="arrow"/></td>
                      </tr>
                      <tr>
                        <td align="center" style="background-color:#CFD1EF;padding:10px;"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <img style="display:block;" border="0" width="560" height="336" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f741cc8f05dd8bfd62bb1c7_color_hero_img.jpg" alt="Hero" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse">
                      <tr>
                        <td align="center">
                          <table align="center" border="0" cellpadding="0" cellspacing="0" width="560" style="border-collapse:collapse;">
                            <tr>
                              <td style="background-color:#BFC1E7;padding:4px;"></td>
                              <td>
                                <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="10" cellspacing="0" width="544" style="border-collapse:collapse">
                                  <tr>
                                    <td align="center" style="background-color:#ffffff;"></td>
                                  </tr>
                                  <tr>
                                    <td align="center" style="font-size:26px;font-weight:700;color:#252525;text-transform:uppercase;line-height:1;">Your <span style="color: #EC008C;">Conveyancing Quotes</span> For...</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="524" style="border-collapse:collapse;">
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="252" style="border-collapse:collapse">
                                              <tr>
                                                <td>
                                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="200" style="border-collapse:collapse">
                                                    <tr>
                                                      <td align="center" style="background-color:#33338D; padding:2px;"></td>
                                                    </tr>
                                                    <tr>
                                                      <td>
                                                        <table bgcolor="#EB008B" align="center" border="0" cellpadding="0" cellspacing="0" width="200" style="border-collapse:collapse">
                                                          <tr>
                                                            <td align="center" style="background-color:#33338D;padding:2px;"></td>
                                                            <td>
                                                              <table bgcolor="#EB008B" align="center" border="1" bordercolor="#FFFFFF" cellpadding="5" cellspacing="0" width="202" style="border-collapse:collapse;">
                                                                <tr>
                                                                  <td align="center" style="font-size:36px;font-weight:600;color:#FFFFFF;line-height: 1;">${leftPostcode}<span style="margin-left: 10px;">${rightPostcode}</span></td>
                                                                </tr>
                                                              </table>
                                                            </td>
                                                            <td align="center" style="background-color:#33338D;padding:2px;"></td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td align="center" style="background-color:#33338D;padding:2px;"></td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                          <td>
                                            <table align="center" border="0" cellpadding="10" cellspacing="0" width="272" style="border-collapse:collapse;">
                                              <tr>
                                                <td style="font-size:15px;color:#252525;line-height:1;"><b style="font-weight:600;">Transaction Type:</b> ${transactionType}</td>
                                              </tr>
                                              <tr>
                                                <td style="background-color:#EAEAF2;padding:1px;"></td>
                                              </tr>
                                              <tr>
                                                <td style="font-size:15px;color:#252525;line-height:1;"><b style="font-weight:600;">Sale Price:</b> £${sellingPrice}</td>
                                              </tr>
                                              <tr>
                                                <td style="background-color:#EAEAF2;padding:1px;"></td>
                                              </tr>
                                              <tr>
                                                <td style="font-size: 15px;color: #252525;line-height: 1;"><b style="font-weight:600;">Sale Property Type:</b> ${salePropertyType}</td>
                                              </tr>
                                              
                                              <tr>
                                              <td style="background-color:#EAEAF2;padding:1px;"></td>
                                            </tr>
                                              <tr>
                                              <td style="font-size:15px;color:#252525;line-height:1;"><b style="font-weight:600;">Purchase Price:</b> £${purchasePrice}</td>
                                            </tr>
                                            <tr>
                                              <td style="background-color:#EAEAF2;padding:1px;"></td>
                                            </tr>
                                            <tr>
                                              <td style="font-size: 15px;color: #252525;line-height: 1;"><b style="font-weight:600;">Purchase Property Type:</b> ${buyPropertyType}</td>
                                            </tr>
  
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="center" style="background-color:#ffffff;"></td>
                                  </tr>
                                </table>
                              </td>
                              <td style="background-color:#BFC1E7;padding:4px;"></td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="560" style="border-collapse:collapse">
                      <tr>
                        <td style="background-color:#BFC1E7;padding:4px;"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="20" cellspacing="0" width="600" style="border-collapse:collapse">
                      <tr>
                        <td>
                          <table align="center" border="0" cellpadding="0" cellspacing="0" width="480" style="border-collapse:collapse">
                            <tr>
                              <td valign="center" align="center">
                                <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                                  <tr>
                                    <td><img style="display:block;" border="0" width="50" height="43" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f719386c4ddd975af3d5d96_text_w_img.png" alt=""/></td>
                                    <td  style="font-size:18px;font-weight:500;color:#252525;">Dear ${name},</td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" style="font-size:18px;line-height:24px;font-weight:500;color:#252525;padding:0px 20px;">Thank you for requesting a conveyancing quote, please find 
                                your customised quotes to assist with the legal work of
                                your property.</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table align="center" border="0" cellpadding="2" cellspacing="0" width="600" style="border-collapse:collapse">
                <tr>
                  <td align="center" style="background-color:#ffffff;"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table align="center" border="0" cellpadding="2" cellspacing="0" width="600" style="border-collapse:collapse">
                <tr>
                  <td align="center" style="background-color:#CFD1EF;"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table align="center" border="0" cellpadding="5" cellspacing="0" width="600" style="border-collapse:collapse">
                <tr>
                  <td align="center" style="background-color:#ffffff;"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="10" cellspacing="0" width="600" style="border-collapse:collapse">
                <tr>
                  <td align="center">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="280" style="border-collapse:collapse">
                      <tr>
                        <td>
                          <table bgcolor="#EB008B" align="center" border="0" cellpadding="10" cellspacing="0" width="280px" style="border-collapse:collapse">
                            <tr>
                              <td align="center" style="color:#FFFFFF;padding:0;">
                                <div bgcolor="#EB008B" align="center" border="0" cellspacing="0" width="280px" style="border-collapse:collapse;padding:10px;">
                                 <span>£ Best Price</span>
                                </div>
                                </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="15" cellspacing="0" width="280" style="border-collapse:collapse">
                            <tr>
                              <td>
                                <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" valign="top" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                        <tr>
                                          <td width="55">
                                            <img width="55" height="55" style="display:block" border="0" src="${
                                              company[0].contact.logo
                                            }" alt=""/>
                                          </td>
                                          <td width="15"></td>
                                          <td>
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="170" style="border-collapse:collapse">
                                              <tr>
                                                <td style="font-size:14px;color:#252525;font-weight:700;">${
                                                  company[0].contact.shortName
                                                }</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <table border="0" cellpadding="2" cellspacing="0" width="170" style="border-collapse:collapse">
                                                    <tr>
                                                      <td><img style="display:block" border="0" width="10" height="15" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71b4d53e9d5de86c924e38_icon_location.png" alt=""/></td>
                                                      <td style="font-size: 12px;color:#33348E;white-space:nowrap;">${
                                                        company[0].contact
                                                          .location
                                                      }</td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                              <tr>
                                                <td align="center" style="background-color:#CFD1EF;padding:10px;"></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                              <tr>
                                                <td align="center" style="background-color:#B0B2DB;padding:0.5px;"></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                              <tr>
                                                <td align="center" width="24"><img width="14" height="14" style="display:block;" border="0" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71b8b45d9c190e12600d0c_icon_info.png" alt=""/></td>
                                                <td>
                                                  <table align="left" border="0" cellpadding="4" cellspacing="0" width="126" style="border-collapse:collapse">
                                                    <tr>
                                                      <td style="font-size:14px;color:#252525;">
                                                        Fee
                                                      </td>
                                                    </tr> 
                                                  </table>
                                                </td>
                                                <td width="90">
                                                  <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="6" cellspacing="0" width="90" style="border-collapse:collapse">
                                                    <tr>
                                                      <td align="center">£ ${company[0].legalFees.totalLegalFee.toFixed(
                                                        2
                                                      )}</td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                              <tr>
                                                <td align="center" style="background-color:#B0B2DB;padding:0.5px;"></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                              <tr>
                                                <td align="center" width="24"><img width="14" height="14" style="display:block;" border="0" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71b8b45d9c190e12600d0c_icon_info.png" alt=""/></td>
                                                <td>
                                                  <table align="left" border="0" cellpadding="4" cellspacing="0" width="126" style="border-collapse:collapse">
                                                    <tr>
                                                      <td style="font-size:14px;color:#252525;">
                                                        Disbursements
                                                      </td>
                                                    </tr> 
                                                  </table>
                                                </td>
                                                <td width="90">
                                                  <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="6" cellspacing="0" width="90" style="border-collapse:collapse">
                                                    <tr>
                                                      <td align="center">£ ${company[0].legalFees.disbursement.toFixed(
                                                        2
                                                      )}</td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="5" cellspacing="0" width="250" style="border-collapse:collapse">
                                        <tr>
                                          <td align="center" style="background-color:#CFD1EF;"></td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                        <tr>
                                          <td align="center" style="padding:10px;"></td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:14px;color:#252525;">Total Price</td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:38px;font-weight:700;color:#EC008C;">£${company[0].legalFees.totalPrice.toFixed(
                                            2
                                          )}</td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                        <tr>
                                          <td align="center" style="padding:10px;"></td>
                                        </tr>
                                        <tr>
                                          <td align="center">
                                            <div style="display:block;background-color:#33338D;border:16px solid #33338D;font-size:15px;color:#FFFFFF;text-decoration:none;">
                                              <a href="${
                                                company[0].contact.website
                                              }" style="font-size:15px; color:#FFFFFF; text-decoration:none;">Instruct Solicitor Now</a>
                                            </div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="center">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="280" style="border-collapse:collapse">
                      <tr>
                        <td>
                          <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="19" cellspacing="0" width="280" style="border-collapse:collapse">
                            <tr>
                              <td align="center" style="color:#FFFFFF;"></td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="15" cellspacing="0" width="280" style="border-collapse:collapse">
                            <tr>
                              <td>
                                <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                  
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" valign="top" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                        <tr>
                                          <td width="55">
                                            <img width="55" height="55" style="display:block" border="0" src="${
                                              company[1].contact.logo
                                            }" alt=""/>
                                          </td>
                                          <td width="15"></td>
                                          <td>
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="170" style="border-collapse:collapse">
                                              <tr>
                                                <td style="font-size:14px;color:#252525;font-weight:700;">${
                                                  company[1].contact.shortName
                                                }</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <table border="0" cellpadding="2" cellspacing="0" width="170" style="border-collapse:collapse">
                                                    <tr>
                                                      <td><img style="display:block" border="0" width="10" height="15" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71b4d53e9d5de86c924e38_icon_location.png" alt=""/></td>
                                                      <td style="font-size:12px;color:#33348E;white-space:nowrap;">${
                                                        company[1].contact
                                                          .location
                                                      }</td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                              <tr>
                                                <td align="center" style="background-color:#CFD1EF;padding:10px;"></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                              <tr>
                                                <td align="center" style="background-color:#B0B2DB;padding:0.5px;"></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                              <tr>
                                                <td align="center" width="24"><img width="14" height="14" style="display:block;" border="0" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71b8b45d9c190e12600d0c_icon_info.png" alt=""/></td>
                                                <td>
                                                  <table align="left" border="0" cellpadding="4" cellspacing="0" width="126" style="border-collapse:collapse">
                                                    <tr>
                                                      <td style="font-size:14px;color:#252525;">
                                                        Fee
                                                      </td>
                                                    </tr> 
                                                  </table>
                                                </td>
                                                <td width="90">
                                                  <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="6" cellspacing="0" width="90" style="border-collapse:collapse">
                                                    <tr>
                                                      <td align="center">£ ${company[1].legalFees.totalLegalFee.toFixed(
                                                        2
                                                      )}</td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                              <tr>
                                                <td align="center" style="background-color:#B0B2DB;padding:0.5px;"></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                              <tr>
                                                <td align="center" width="24"><img width="14" height="14" style="display:block;" border="0" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71b8b45d9c190e12600d0c_icon_info.png" alt=""/></td>
                                                <td>
                                                  <table align="left" border="0" cellpadding="4" cellspacing="0" width="126" style="border-collapse:collapse">
                                                    <tr>
                                                      <td style="font-size:14px;color:#252525;">
                                                        Disbursements
                                                      </td>
                                                    </tr> 
                                                  </table>
                                                </td>
                                                <td width="90">
                                                  <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="6" cellspacing="0" width="90" style="border-collapse:collapse">
                                                    <tr>
                                                      <td align="center">£ ${company[1].legalFees.disbursement.toFixed(
                                                        2
                                                      )}</td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="5" cellspacing="0" width="250" style="border-collapse:collapse">
                                        <tr>
                                          <td align="center" style="background-color:#CFD1EF;"></td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                        <tr>
                                          <td align="center" style="padding:10px;"></td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:14px;color:#252525;">Total Price</td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:38px;font-weight:700;color:#EC008C;">£${company[1].legalFees.totalPrice.toFixed(
                                            2
                                          )}</td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                        <tr>
                                          <td align="center" style="padding:10px;"></td>
                                        </tr>
                                        <tr>
                                          <td align="center">
                                            <div style="display:block;background-color:#33338D;border:16px solid #33338D;font-size:15px;color:#FFFFFF;text-decoration:none;">
                                            <a href="${
                                              company[1].contact.website
                                            }" style="font-size:15px;color:#FFFFFF;text-decoration:none;">Instruct Solicitor Now</a>
                                          </div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="280" style="border-collapse:collapse">
                      <tr>
                        <td>
                          <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="15" cellspacing="0" width="280" style="border-collapse:collapse">
                            <tr>
                              <td>
                                <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" valign="top" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                        <tr>
                                          <td width="55">
                                            <img width="55" height="55" style="display:block" border="0" src="${
                                              company[2].contact.logo
                                            }" alt=""/>
                                          </td>
                                          <td width="15"></td>
                                          <td>
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="170" style="border-collapse:collapse">
                                              <tr>
                                                <td style="font-size:14px;color:#252525;font-weight:700;">${
                                                  company[2].contact.shortName
                                                }</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <table border="0" cellpadding="2" cellspacing="0" width="170" style="border-collapse:collapse">
                                                    <tr>
                                                      <td><img style="display:block" border="0" width="10" height="15" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71b4d53e9d5de86c924e38_icon_location.png" alt=""/></td>
                                                      <td style="font-size:12px;color:#33348E;white-space:nowrap;">${
                                                        company[2].contact
                                                          .location
                                                      }</td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                              <tr>
                                                <td align="center" style="background-color:#CFD1EF;padding:10px;"></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                              <tr>
                                                <td align="center" style="background-color:#B0B2DB;padding:0.5px;"></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                              <tr>
                                                <td align="center" width="24"><img width="14" height="14" style="display:block;" border="0" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71b8b45d9c190e12600d0c_icon_info.png" alt=""/></td>
                                                <td>
                                                  <table align="left" border="0" cellpadding="4" cellspacing="0" width="126" style="border-collapse:collapse">
                                                    <tr>
                                                      <td style="font-size:14px;color:#252525;">
                                                        Fee
                                                      </td>
                                                    </tr> 
                                                  </table>
                                                </td>
                                                <td width="90">
                                                  <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="6" cellspacing="0" width="90" style="border-collapse:collapse">
                                                    <tr>
                                                      <td align="center">£ ${company[2].legalFees.totalLegalFee.toFixed(
                                                        2
                                                      )}</td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                              <tr>
                                                <td align="center" style="background-color:#B0B2DB;padding:0.5px;"></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                              <tr>
                                                <td align="center" width="24"><img width="14" height="14" style="display:block;" border="0" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71b8b45d9c190e12600d0c_icon_info.png" alt=""/></td>
                                                <td>
                                                  <table align="left" border="0" cellpadding="4" cellspacing="0" width="126" style="border-collapse:collapse">
                                                    <tr>
                                                      <td style="font-size:14px;color:#252525;">
                                                        Disbursements
                                                      </td>
                                                    </tr> 
                                                  </table>
                                                </td>
                                                <td width="90">
                                                  <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="6" cellspacing="0" width="90" style="border-collapse:collapse">
                                                    <tr>
                                                      <td align="center">£ ${company[2].legalFees.disbursement.toFixed(
                                                        2
                                                      )}</td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="5" cellspacing="0" width="250" style="border-collapse:collapse">
                                        <tr>
                                          <td align="center" style="background-color:#CFD1EF;"></td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                        <tr>
                                          <td align="center" style="padding:10px;"></td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:14px;color:#252525;">Total Price</td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:38px;font-weight:700;color:#EC008C;">£${company[2].legalFees.totalPrice.toFixed(
                                            2
                                          )}</td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                        <tr>
                                          <td align="center" style="padding:10px;"></td>
                                        </tr>
                                        <tr>
                                          <td align="center">
                                            <div style="display:block;background-color:#33338D;border:16px solid #33338D;font-size:15px;color:#FFFFFF;text-decoration:none;">
                                              <a href="${
                                                company[2].contact.website
                                              }" style="font-size:15px;color:#FFFFFF;text-decoration:none;">Instruct Solicitor Now</a>
                                            </div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="center">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="280" style="border-collapse:collapse">
                      <tr>
                        <td>
                          <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="15" cellspacing="0" width="280" style="border-collapse:collapse">
                            <tr>
                              <td>
                                <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" valign="top" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                        <tr>
                                          <td width="55">
                                            <img width="55" height="55" style="display:block" border="0" src="${
                                              company[3].contact.logo
                                            }" alt=""/>
                                          </td>
                                          <td width="15"></td>
                                          <td>
                                            <table align="left" border="0" cellpadding="0" cellspacing="0" width="170" style="border-collapse:collapse">
                                              <tr>
                                                <td style="font-size:14px;color:#252525;font-weight:700;">${
                                                  company[3].contact.shortName
                                                }</td>
                                              </tr>
                                              <tr>
                                                <td>
                                                  <table border="0" cellpadding="2" cellspacing="0" width="170" style="border-collapse:collapse">
                                                    <tr>
                                                      <td><img style="display: block" border="0" width="10" height="15" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71b4d53e9d5de86c924e38_icon_location.png" alt=""/></td>
                                                      <td style="font-size:12px;color:#33348E;white-space:nowrap;">${
                                                        company[3].contact
                                                          .location
                                                      }</td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                              <tr>
                                                <td align="center" style="background-color:#CFD1EF;padding:10px;"></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                              <tr>
                                                <td align="center" style="background-color:#B0B2DB;padding:0.5px;"></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                              <tr>
                                                <td align="center" width="24"><img width="14" height="14" style="display:block;" border="0" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71b8b45d9c190e12600d0c_icon_info.png" alt=""/></td>
                                                <td>
                                                  <table align="left" border="0" cellpadding="4" cellspacing="0" width="126" style="border-collapse:collapse">
                                                    <tr>
                                                      <td style="font-size:14px;color: #252525;">
                                                        Fee
                                                      </td>
                                                    </tr> 
                                                  </table>
                                                </td>
                                                <td width="90">
                                                  <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="6" cellspacing="0" width="90" style="border-collapse:collapse">
                                                    <tr>
                                                      <td align="center">£ ${company[3].legalFees.totalLegalFee.toFixed(
                                                        2
                                                      )}</td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse">
                                              <tr>
                                                <td align="center" style="background-color:#B0B2DB;padding:0.5px;"></td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                              <tr>
                                                <td align="center" width="24"><img width="14" height="14" style="display: block;" border="0" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71b8b45d9c190e12600d0c_icon_info.png" alt=""/></td>
                                                <td>
                                                  <table align="left" border="0" cellpadding="4" cellspacing="0" width="126" style="border-collapse:collapse">
                                                    <tr>
                                                      <td style="font-size:14px;color:#252525;">
                                                        Disbursements
                                                      </td>
                                                    </tr> 
                                                  </table>
                                                </td>
                                                <td width="90">
                                                  <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="6" cellspacing="0" width="90" style="border-collapse:collapse">
                                                    <tr>
                                                      <td align="center">£ ${company[3].legalFees.disbursement.toFixed(
                                                        2
                                                      )}</td>
                                                    </tr>
                                                  </table>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="5" cellspacing="0" width="250" style="border-collapse:collapse">
                                        <tr>
                                          <td align="center" style="background-color:#CFD1EF;"></td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table bgcolor="#CFD1EF" align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                        <tr>
                                          <td align="center" style="padding:10px;"></td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:14px;color:#252525;">Total Price</td>
                                        </tr>
                                        <tr>
                                          <td align="center" style="font-size:38px;font-weight:700;color:#EC008C;">£${company[3].legalFees.totalPrice.toFixed(
                                            2
                                          )}</td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="border-collapse:collapse;">
                                        <tr>
                                          <td align="center" style="padding:10px;"></td>
                                        </tr>
                                        <tr>
                                          <td align="center">
                                            <div style="display:block;background-color:#33338D;border:16px solid #33338D;font-size:15px;color:#FFFFFF;text-decoration:none;">
                                              <a href="${
                                                company[3].contact.website
                                              }" style="font-size:15px;color:#FFFFFF;text-decoration:none;">Instruct Solicitor Now</a>
                                            </div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="12" cellspacing="0" width="600" style="border-collapse:collapse;">
                <tr>
                  <td>
                    <table bgcolor="#FFFFFF" align="center" border="4" bordercolor="#CFD1EF" cellpadding="0" cellspacing="0" width="576" style="border-collapse:collapse;border:4px solid #CFD1EF;">
                      <tr>
                        <td>
                          <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="0" cellspacing="0" width="568" style="border-collapse:collapse;">
                            <tr>
                              <td>
                                <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="10" cellspacing="0" width="548" style="border-collapse:collapse;">
                                  <tr>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td align="center" style="font-size:42px;font-weight:700;color:#252525;">Need some help?</td>
                                  </tr>
                                  <tr>
                                    <td align="center">You can contact us on the details below.</td>
                                  </tr>
                                  <tr>
                                    <td align="center">We’re available from <b>8am to 10pm</b> Monday to Friday,<br/> <b>10am to 4pm</b> Saturday to Sunday.</td>
                                  </tr>
                                  <tr>
                                    <td  align="center">
                                      <img width="132" height="63" style="display:block;" border="0" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71f04ad418d2610a567d3d_logo_icon.jpg" alt=""/>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table bgcolor="#FFFFFF" align="center" border="0" cellpadding="10" cellspacing="0" width="548" style="border-collapse:collapse;">
                                  <tr>
                                    <td></td>
                                    <td width="80" align="right">
                                      <img width="80" height="80" style="display:block;" border="0" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71f4924742006510b24871_profile.png" alt=""/>
                                    </td>
                                    <td></td>
                                    <td>
                                      <table bgcolor="#FFFFFF" align="left" border="0" cellpadding="5" cellspacing="0" width="388" style="border-collapse:collapse;">
                                        <tr>
                                          <td style="font-size:20px;font-weight:600;">Get In Touch</td>
                                        </tr>
                                        <tr>
                                          <td style="font-size:18px;">Tel: 0161 513 8300</td>
                                        </tr>
                                        <tr>
                                          <td style="font-size:18px;">E-mail: <a style="color: #EC008C;text-decoration: none; display: inline-block;" href="mailto:hello@mypropertyconveyancer.co.uk">hello@mypropertyconveyancer.co.uk</a></td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table align="center" border="0" cellpadding="40" cellspacing="0" width="568" style="border-collapse:collapse;">
                                  <tr>
                                    <td align="center">
                                      <a href="https://direct.lc.chat/12487926/" style="display:inline-block;text-decoration:none;"><font style="display:inline-block;background-color:#33338D;border:16px solid #33338D;font-size:15px;color:#FFFFFF;text-decoration:none;">Start Webchat Now</font></a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table bgcolor="#252525" align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse;">
                <tr>
                  <td><img style="display:block;" border="0" width="600" height="130" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71fb60d418d23aaa569626_footer_top.jpg" alt=""/></td>
                </tr>
                <tr>
                  <td>
                    <table bgcolor="#252525" align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse:collapse;">
                      <tr>
                        <td align="center" style="font-size:24px;color:#FFFFFF;">We hope you found the process simple <br/>and would love your feedback!</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td><img style="display:block;" border="0" width="600" height="36" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71fb5fc4ddd9b2f03e889e_footer_btn_top.jpg" alt=""/></td>
                </tr>
                <tr>
                  <td><a href="https://g.page/r/Cf54tvfAfcdcEAU/review" style="display:block;"><img style="display:block;" border="0" width="600" height="45" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71fb60e96c961efc9b8d9d_footer_btn.jpg" alt=""/></a></td>
                </tr>
                <tr>
                  <td><img style="display:block;" border="0" width="600" height="62" src="https://uploads-ssl.webflow.com/5f47b76ee28c574aee330915/5f71fb60d8703360152ff2eb_footer_bottom.jpg" alt=""/></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  
  <table class="gmail-app-fix">
  <tr>
      <td>
          <table cellpadding="0" cellspacing="0" border="0" align="center" width="600">
              <tr>
                  <td cellpadding="0" cellspacing="0" border="0" height="1"; style="line-height: 1px; min-width: 200px;">
                      <img src="transparent.gif" width="200" height="1" style="display: block; max-height: 1px; min-height: 1px; min-width: 200px; width: 200px;"/>
                  </td>
                  <td cellpadding="0" cellspacing="0" border="0" height="1"; style="line-height: 1px; min-width: 200px;">
                      <img src="transparent.gif" width="200" height="1" style="display: block; max-height: 1px; min-height: 1px; min-width: 200px; width: 200px;"/>
                  </td>
                  <td cellpadding="0" cellspacing="0" border="0" height="1"; style="line-height: 1px; min-width: 200px;">
                      <img src="transparent.gif" width="200" height="1" style="display: block; max-height: 1px; min-height: 1px; min-width: 200px; width: 200px;"/>
                  </td>
              </tr>
          </table>
      </td>
  </tr>
  </table>
  
  </body>
  </html>`; // email content in HTML;

  return html;
};
