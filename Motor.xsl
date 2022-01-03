<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
    <table id="Chart" border="1" class="indent">
        <thead>
            <tr>
                <th>Select</th>
                <th>engine</th>
                <th>bike</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <xsl:for-each select="//section">
                <tr>
                    <td colspan="3">
                        <xsl:value-of select="@name" />
                    </td>
                </tr>
                <xsl:for-each select="new">
                    <tr id="{position()}">
                        <xsl:attribute name="eletric">
                            <xsl:value-of select="boolean(@eletric)" />
                        </xsl:attribute>
                        <td align="center">
                            <input name="bike0" type="checkbox" />
                        </td>
                        <td>
                            <xsl:value-of select="bike" />
                        </td>
                        <td align="right">
                            <xsl:value-of select="price" />
                        </td>
                    </tr>
                </xsl:for-each>
            </xsl:for-each>
        </tbody>
    </table>
</xsl:template>
</xsl:stylesheet>