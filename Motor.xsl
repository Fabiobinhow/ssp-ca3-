<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
    <table id="Chart" border="1" class="indent">
        <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Engine</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <xsl:for-each select="//section">
                <tr>
                    <td colspan="4">
                        <xsl:value-of select="@name" />
                    </td>
                </tr>
                <xsl:for-each select="entry">
                    <tr>
                        <td>
                            <xsl:value-of select="name" />
                        </td>
                        <td align="right">
                            <xsl:value-of select="Category" />
                        </td>
                        <td align="right">
                            <xsl:value-of select="engine" />
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