#!/bin/bash
###################################
#
#       check-http-wrapper.sh
#
#		wrapper for check-http plugin
#		to handle optional arguments
#
###################################

HOST=$1;
URL=$2;
SSL=$3;
PORT=$4;
USER=$5;
PASS=$6;
STRING=$7;
POST=$8;
XFLAGS=$9;

COMMAND="$ZENHOME/libexec/check_http"

if [ "$HOST" ] ; then
    if  [[ "$HOST" =~ ^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$ ]]; then
        COMMAND=$COMMAND" -I "$HOST
    else
        COMMAND=$COMMAND" -H "$HOST
    fi
fi

if [ "$PORT" ] ; then
	COMMAND=$COMMAND" -p "$PORT
fi

if [ "$URL" ] ; then
	COMMAND=$COMMAND" -u "'"'$URL'"'
fi

if [ "$USER" ] ; then
	COMMAND=$COMMAND" -a "$USER
fi

if [ "$PASS" ] ; then
	COMMAND=$COMMAND":"$PASS
fi

if [ "$STRING" ] ; then
	COMMAND=$COMMAND" -s "'"'$STRING'"'
fi

if [ "$POST" ] ; then
	COMMAND=$COMMAND" -P "$POST
fi

if [ "$SSL" == "True" ] ; then
	COMMAND=$COMMAND" -S"
fi

if [ "$XFLAGS" ] ; then
	COMMAND=$COMMAND" "$XFLAGS
fi

echo "$COMMAND"
/bin/sh -c "$COMMAND"

