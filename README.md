# Apache httpd saml

Using Apache httpd with mod_auth_mellon (https://github.com/UNINETT/mod_auth_mellon) to deal with SSL and SAML and then proxy requests to your Application server.

## Installing Apache httpd

The following will install, configure as a service, and (re)start the service.

```bash
yum install httpd mod_ssl openssl
chkconfig --levels 235 httpd on
service httpd restart
```

## Install Mod_Auth_Mellon on Red Hat, CentOS, and/or Amazon Linux

### Amazon Linux

Before installing mod_auth_mellon you must first install these dependencies

```bash
wget https://github.com/innovation-gateway/httpd-saml/raw/master/amazon-linux/lasso-2.4.1-5.el7.x86_64.rpm
wget https://github.com/innovation-gateway/httpd-saml/raw/master/amazon-linux/xmlsec1-1.2.20-5.el7.x86_64.rpm
wget https://github.com/innovation-gateway/httpd-saml/raw/master/amazon-linux/xmlsec1-openssl-1.2.20-5.el7.x86_64.rpm

yum localinstall xmlsec1-*
yum localinstall lasso-2.4.0-5.el6.x86_64.rpm
```

### mod_auth_mellon

```bash
wget https://github.com/innovation-gateway/httpd-saml/raw/master/mod_auth_mellon/mod_auth_mellon-0.10.0-1.el6.x86_64.rpm

yum localinstall mod_auth_mellon-0.10.0-1.el6.x86_64.rpm
```

## Unbuntu

sudo apt=get install apache2
sudo apt-get install openssl liblasso3
sudo apt-get install libapache2-mod-auth-mellon

NOTE: If you later run into problems getting authentication to work, ensure that the version of mod_auth_mellon that installed is >=0.10. If it is not, upgrade now. Running an older version, such as 0.7 will cause problems when we update the config file.

### additional files

```bash
wget https://github.com/innovation-gateway/httpd-saml/raw/master/saml-metadata/idp-metadata.xml
```

## Configure httpd for SAML

```bash
wget https://github.com/innovation-gateway/httpd-saml/raw/master/httpd/capability.conf

mv capabiliy.conf /etc/httpd/conf.d/
```

Edit the conf file where needed:

1. `ServerName` must be edited to reflect your capability endpoint's URL
2. `SSLCertificateFile` and `SSLCertificateKeyFile` should be edited if you either stored the files in a different place or named them differently
3. `MellonSPPrivateKeyFile` and `MellonSPCertFile` should have the same values as above
4. `ProxyPass` and `ProxyPassReverse` should be edited to reflect what the upstream server's port is
5. `MellonCond "isMemberOf"` can be edited to use a different role

## Download sp-metadata.xml 

Instuctions pending

## Copy certificates

Copy mycapability.crt and mycapability.key to the location supplied in the conf file

## Restart httpd

`service httpd restart`
