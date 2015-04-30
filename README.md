# Using Apache httpd with mod_auth_mellon to deal with SSL and SAML and then proxy requests to your Application server.

## Installing Apache httpd

The following will install, configure as a service, and (re)start the service.

```bash
yum install httpd mod_ssl openssl
chkconfig --levels 235 httpd on
service httpd restart
```

## Install Mod_Auth_Mellon

### If using Amazon Linux

```bash
wget ftp://fr2.rpmfind.net/linux/centos/6.6/os/x86_64/Packages/lasso-2.4.0-5.el6.x86_64.rpm
wget https://archives.fedoraproject.org/pub/archive/fedora/linux/core/6/x86_64/os/Fedora/RPMS/xmlsec1-1.2.9-8.1.x86_64.rpm
wget https://archives.fedoraproject.org/pub/archive/fedora/linux/core/6/x86_64/os/Fedora/RPMS/xmlsec1-openssl-1.2.9-8.1.x86_64.rpm

yum localinstall xmlsec1-*
yum localinstall lasso-2.4.0-5.el6.x86_64.rpm
```

### mod_auth_mellon

```bash
wget https://s3-us-gov-west-1.amazonaws.com/igw-us/resources/mod_auth_mellon-0.10.0-1.el6.x86_64.rpm

yum localinstall mod_auth_mellon-0.10.0-1.el6.x86_64.rpm
```

### additional files

```bash
wget https://s3-us-gov-west-1.amazonaws.com/igw-us/resources/idp-metadata.xml
```

## Configure httpd for SAML


## Download sp-metadata.xml 

Instuctions pending

## Copy certificates

Copy mycapability.crt and mycapability.key to the location

## Restart httpd

`service httpd restart`
